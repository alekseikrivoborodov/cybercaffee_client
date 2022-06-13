import { useRef, useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardList from '../components/CardList';



function Admin() {
    const [cards, setCards] = useState([
        { id: 1, title: "Крылышки", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
        { id: 2, title: "Салат", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
        { id: 3, title: "Бургер", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    ])

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
        setCards([...cards, newCard])
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
