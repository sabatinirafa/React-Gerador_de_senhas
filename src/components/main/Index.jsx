import { useState } from "react";
import styles from "./styles.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import createPwd from '../../hooks/createPwd'



export default function Main() {
  const [showPwd, setShowPwd] = useState(false)

  const [newPwd, setNewPwd] = useState('')

  const [copyConfirm, setCopyConfirm] = useState(false)

  function handleShowPwd(showPwd) {
    if (showPwd) {
      setShowPwd(false)
    }
    if (!showPwd) {
      setShowPwd(true)
    }
  }

  function handleCreatePwd() {
    setNewPwd(createPwd())
    setCopyConfirm(false)
  }

  function handleCopy() {
    navigator.clipboard.writeText(newPwd)
    setCopyConfirm(true)

  }

  return (
    <div className={styles.container}>
      <h1>Gerador de senhas</h1>
      <div className={styles.buttons}>
        <button
        onClick={() => handleCreatePwd()}
        >
          Gerar senha
        </button>
        <button
        onClick={() => handleCopy()}
        >
          { copyConfirm ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <div className={styles.pwd}>
        <input type={showPwd ? "text" : "password"} name="pwd" id="pwd" value={newPwd}/>
          {
            showPwd && <AiFillEye 
            className={styles.icon}
            onClick={() => handleShowPwd(showPwd)}
            />
          }
          {
            !showPwd && <AiFillEyeInvisible 
            className={styles.icon}
            onClick={() => handleShowPwd(showPwd)}
            />
          }          
      </div>
    </div>
  );
}
