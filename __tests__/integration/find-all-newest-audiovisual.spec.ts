import { FindAllNewestAudioVisual } from '../../backend/core/domain/usecases'
import { build } from '../../database'

describe('Verificação de caso de uso com bd', () => {
  it('Deve retornar todos os audiovisuais mais recentes', async () => {
    await build()
    const newestProducts = new FindAllNewestAudioVisual()

    const result = await newestProducts.execute(
      {},
      {
        category: '1',
      }
    )

    expect(result).toBeTruthy()
  })
})
