enum Options {
	AudioVisual = 1,
	Book = 2,
	Audio = 3,
	Event = 4,
	Exhibition = 5,
	Workshop = 152,
	Participation = 163,
	Single = 6,
	Album = 7,
	AlbumInterprete = 8,
	Ep = 9,
	BookSubCategory = 10,
	Curta = 11,
	Documentaries = 12,
	Shows = 13,
	PDF = 14,
	MP3 = 15,
	MP4 = 16,
	Link = 17,
	Thumbnail = 18,
	PhotoOfArtists = 19,
	PhotoOfEvents = 20,
	PhotoOfPlace = 21,
}

export enum EnumCategory {
	AudioVisual = Options.AudioVisual,
	Book = Options.Book,
	Audio = Options.Audio,
	Event = Options.Event,
	Exhibition = Options.Exhibition,
}

enum SubCategory {
	Single = Options.Single,
	Album = Options.Album,
	AlbumInterprete = Options.AlbumInterprete,
	Ep = Options.Ep,
	Book = Options.BookSubCategory,
	Curtas = Options.Curta,
	Shows = Options.Shows,
	Documentaries = Options.Documentaries,
}

enum Type {
	PDF = Options.PDF,
	MP3 = Options.MP3,
	MP4 = Options.MP4,
	LINK = Options.Link,
	THUMBNAIL = Options.Thumbnail,
	PHOTO_ARTIST = Options.PhotoOfArtists,
	PHOTO_EVENT = Options.PhotoOfEvents,
	PHOTO_LOCAL = Options.PhotoOfPlace,
}
