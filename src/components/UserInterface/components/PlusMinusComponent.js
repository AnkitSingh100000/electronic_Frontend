import { useState,useEffect } from "react"
import { Button } from "@mui/material"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from "react-router-dom";
export default function PlusMinusComponent(props)
{
  var navigate=useNavigate()
    const [count,setCount]=useState(0)

    useEffect(function(){
      setCount(props.value)
    },[props])
    const handleAdd=()=>{
        var c=count+1
        setCount(c)
        props.onChange(c)
    }
    const handleMinus=()=>{
        var c=count-1
        if(c>=0)
        {
            setCount(c)
            props.onChange(c)
        }
    }

    const handleContinue=()=>{
      navigate('/home')
    }
   return(<div>
      {count==0?
      <div style={{display:'flex',width:"100%"}}>
      <Button onClick={handleAdd} style={{borderColor:'#fff',width:"30%",background:"#353535",color:'#ffff',fontWeight:'bold',textTransform:'none',padding:"6px 40px00",borderRadius:10}} variant="outlined">Add to Cart</Button>
      <Button onClick={handleAdd} style={{borderColor:'#12DAA8',width:"30%",background:"#12DAA8",marginLeft:'5%',color:'#000',fontWeight:'bold',textTransform:'none',padding:"6px 40px00",borderRadius:10}} variant="outlined">Buy Now</Button>
      </div>:
      <div style={{display:'flex',alignItems:'center',padding:1}}>
     <div style={{padding:5,width:110,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
     
      <Fab onClick={handleMinus} size="small" style={{background:'#12DAA8'}} aria-label="add">
        <RemoveIcon fontSize="small"/>
      </Fab>
      <div style={{fontSize:20,fontWeight:500,color:props.screen=='cart'?'#000':'#fff'}}>{count}</div>
      <Fab onClick={handleAdd} size="small" style={{marginLeft:"5%",background:'#12DAA8'}}  aria-label="add">
        <AddIcon fontSize="small" />
      </Fab>
      </div>
      {props.screen=='cart'?<></>:
      <Button onClick={handleContinue} style={{borderColor:'#fff',height:40,width:"35%",marginLeft:'4%',background:"#353535",color:'#ffff',fontWeight:'bold',textTransform:'none',borderRadius:10}} variant="outlined">Continue Shopping</Button>}
      </div>}
   </div>)
}