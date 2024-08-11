export const getGifs = async( cat ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=1FNCa3o2J8fygGKSK7JByaKnmT7rv5H5&q=${ cat }&limit=20`
    const resp = await fetch ( url );
    const { data } = await resp.json();
    const gifs = data.map ( img =>  ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}