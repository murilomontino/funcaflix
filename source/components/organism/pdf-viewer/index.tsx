import React, { useMemo, useState } from 'react'
import { Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Page, pdfjs } from 'react-pdf'

import {
  PDFContainer,
  ContainerControls,
  ContainerButton,
  TextButton,
  Container,
  ContainerButtonControls,
} from './styles'

import { useSize } from '@/hooks/utils/use-size'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

type Props = {
  id: string
}

const PdfViewer = ({ id }: Props) => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)

  const {
    size: { width, height },
  } = useSize()

  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages)
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const PDF = useMemo(() => {
    setPageNumber(1)
    return id
      ? {
          url: `http://localhost:3000/api/books/pdf/${id}`,
          httpHeaders: {
            authorization: 'Api-key 2458cdd1-b568-52eb-a99f-d7e006dface9',
          },
        }
      : null
  }, [id])

  return (
    <Container
      style={{
        maxWidth: width,
        minHeight: height / 2,
      }}
    >
      <PDFContainer
        file={PDF}
        noData={() => {
          return (
            <View
              style={{
                width: width,
                height: height / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Nenhum livro selecionado</Text>
            </View>
          )
        }}
        renderMode="svg"
        loading={() => {
          return (
            <View
              style={{
                width: width,
                height: height,
              }}
            ></View>
          )
        }}
        onContextMenu={(e) => e.preventDefault()}
        onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf.numPages)}
      >
        <Page
          width={RFPercentage(50)}
          loading={() => (
            <View
              style={{
                width: width,
                height: height * 2,
                backgroundColor: '#666666',
              }}
            ></View>
          )}
          pageNumber={pageNumber}
        />
      </PDFContainer>

      {!!id && (
        <ContainerControls>
          <TextButton>{`${pageNumber}/${numPages}`}</TextButton>
          <ContainerButtonControls>
            <ContainerButton onPress={prevPage} disabled={pageNumber === 1}>
              <TextButton
                style={[
                  pageNumber === 1 && {
                    fontWeight: 'normal',
                    color: 'transparent',
                  },
                ]}
              >
                Anterior
              </TextButton>
            </ContainerButton>
            <ContainerButton onPress={nextPage} disabled={pageNumber === numPages}>
              <TextButton
                style={[
                  pageNumber === numPages && {
                    fontWeight: 'normal',
                    color: 'transparent',
                  },
                ]}
              >
                Próximo
              </TextButton>
            </ContainerButton>
          </ContainerButtonControls>
        </ContainerControls>
      )}
    </Container>
  )
}

export default PdfViewer
