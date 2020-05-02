let albums = [
    {title: 'Nothing Shocking', artist: 'Janes Addiction', studio: 'Eldorado Studios', genre: 'alternative rock' },
    {title: 'Tea For The Tillerman', artist: 'Cat Stevens', studio: 'Morgan Studios', genre: 'folk rock' },
    {title: 'High as Hope', artist: 'Florence + the Machine', studio: 'Republic Records and Virgin EMI Records', genre: 'alternative/indie' },
    {title: 'Come Away With Me', artist: 'Norah Jones', studio: 'Sorcerer Sound Studio', genre: 'folk' },
    {title: 'Purple Rain', artist: 'Prince and The Revolution', studio: 'First Avenue', genre: 'pop' },
];

const getAll = () => {
    //return albums by title
    return albums;
}

const getAlbum = (title) => {
    return albums.find((album) => {
        return album.title == title;
    });
}

module.exports = {getAll, getAlbum}
