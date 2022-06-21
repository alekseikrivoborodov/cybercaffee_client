import { useRef, useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardList from '../components/CardList';



function Admin({cards, create}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")

    const addNewCard = (e) => {
        e.preventDefault()

        const newCard = {
            id: Date.now(),
            title,
            description,
            img
        }
        create(newCard)

        setTitle('')
        setDescription('')
        setImg('')

    }


    return (
        <div className="Admin">
            <form>
                <MyInput type="text" placeholder='Имя блюда' value={title} onChange={e => setTitle(e.target.value)} /><br />
                <MyInput type="text" placeholder='Описание' value={description} onChange={e => setDescription(e.target.value)} /><br />
                <MyInput type="text" placeholder='Ссылка на фото' value={img} onChange={e => setImg(e.target.value)} /><br />
                {/* <input type="file"></input> */}
                <MyButton onClick={addNewCard}>Добавить блюдо</MyButton><br />
            </form>
            <CardList cards={cards} />
        </div>
    );
}

export default Admin;
