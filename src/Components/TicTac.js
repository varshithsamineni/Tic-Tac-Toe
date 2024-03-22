import "./TicTac.css";

import {useEffect} from "react";

import {useState} from "react";
const TicTac = () => {
  const [arr,setArr]=useState(["", "","","","","","","",""]);
  const [flag,setFlag]=useState(0);
  const [ans,setAns]=useState('');
 
  const [lock,setLock]=useState(false);

  const toggle=(e,num)=>{
    if(lock)
    {
      
    return 0;
    }
    if(flag%2===0)
    {
      setArr(prevArr => {
        const newArr = [...prevArr];
        newArr[num] = 'X';
        return newArr;
      });
      
      e.target.innerHTML='X';
      setFlag(prevFlag=>prevFlag+1);
      setAns('X');
    }
    else
    {
      setArr(prevArr => {
        const newArr = [...prevArr];
        newArr[num] = 'O';
        setAns('O');
        return newArr;
      });
      
      e.target.innerHTML='O';
      setFlag(prevFlag=>prevFlag+1);

    }
  }
  const won=()=>{
    document.querySelector(".output").innerText = `The ${ans} Won`;
    setLock(true);
  }
  useEffect(()=>{
    if ((arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== '') ||
      (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== '') ||
      (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== '') ||
      (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== '') ||
      (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== '') ||
      (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== '') ||
      (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== '') ||
      (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== '')) {
           won();
      }
    },);
  return (
    <>
      <div className="maindiv">
        <div className="innerdiv">
        <h1>
          Tic Tac Toe Game Using <span>React</span>
        </h1>
        <div className="outer">
          <div className="inner" onClick={(e)=>{toggle(e,0)}}>{arr[0]}</div>
          <div className="inner" onClick={(e)=>{toggle(e,1)}}>{arr[1]}</div>
          <div className="inner" onClick={(e)=>{toggle(e,2)}}>{arr[2]}</div>
        </div>
        <div className="outer">
          <div className="inner" onClick={(e)=>{toggle(e,3)}}>{arr[3]}</div>
          <div className="inner" onClick={(e)=>{toggle(e,4)}}>{arr[4]}</div>
          <div className="inner" onClick={(e)=>{toggle(e,5)}}>{arr[5]}</div>
        </div>
        <div className="outer">
          <div className="inner" onClick={(e)=>{toggle(e,6)}}>{arr[6]}</div>
          <div className="inner" onClick={(e)=>{toggle(e,7)}}>{arr[7]}</div>
          <div className="inner" onClick={(e)=>{toggle(e,8)}}>{arr[8]}</div>
        </div>
        <div className="reset">
          <button onClick={()=>{setArr(["", "","","","","","","",""])}}>Reset</button>
        </div>
        <div className="output"></div>

        
        </div>
      </div>
    </>
  );
};

export default TicTac;
