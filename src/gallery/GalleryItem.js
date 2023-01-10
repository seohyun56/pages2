import { GalleryItemBox } from './GalleryStyle';

function GalleryItem({item}) {
    const {user, previewURL, views, tags, type} = item;
    
    return (
        <GalleryItemBox>
            <h2>#{user}</h2>
            <img src={previewURL} alt={tags} />
            <ul>
                <li>태그: {tags}</li>
                <li>뷰어: {views}</li>
                <li>종류: {type}</li>
            </ul>
        </GalleryItemBox>
    );
}

export default GalleryItem;