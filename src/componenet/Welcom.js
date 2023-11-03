import { useState } from "react"

function Welcom() {
    let [name, setname] = useState('')
    let [password, setpassword] = useState('')
    let [gender, setgender] = useState('')

    let namehandller = (name) => {
        setname(name)
    }
    let passwordhandller = (pass) => {
        setpassword(pass)
    }
    let genderhandller = (gender) => {
        setgender(gender)
    }

    return (
        <form className="container" onSubmit={(e)=>{
            e.preventDefault()
            console.log(`Name: ${name}, Password: ${password}, Gender: ${gender}`)
        }}>
            <label>name</label>
            <input type="text" placeholder="name" onChange={(ele) => {
                namehandller(ele.target.value)
            }} />
            <br />
            <br />
            <label>password</label>
            <input type="password" placeholder="password" onChange={(ele) => {
                passwordhandller(ele.target.value)
            }}  />
            <br />
            <br />
            <label>gender</label>
            <select onChange={(ele) => {
                genderhandller(ele.target.value)
            }}>
                <option value="male">Male</option>
                <option value="female">female</option>
            </select>
            <button type="submit">gg</button>


        </form>
    )
}
export default Welcom

