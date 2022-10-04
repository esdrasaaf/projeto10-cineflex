import styled from "styled-components"

export default function Catalog () {
    return (
        <FilmList>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
            <Film> 
                <img src="https://br.web.img3.acsta.net/pictures/17/11/22/18/04/4103712.jpg" alt="imgqualquer"/>
            </Film>
        </FilmList>
    )
}

const FilmList = styled.ul `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Film = styled.li `
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 25px;

    img {
        width: 129px;
        height: 193px;
    }
`