import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FilterListIcon from '@mui/icons-material/FilterList';
export default function SortFilterComponent()
{
  return(<div>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div style={{width:'50%',border:'1px solid ',background:'#353535',height:50,padding:7,display:'flex',justifyContent:'center',fontSize:16}}>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div>
        <FormatListBulletedIcon style={{color:'#fff',marginTop:'50%'}}/>
    </div>
    <div style={{padding:12,color:'#fff'}}>
        <b>Sort</b>
    </div>
    </div>
    </div>
    <div style={{width:'50%',border:'1px solid ',height:50,background:'#353535',padding:7,display:'flex',justifyContent:'center',fontSize:16}}>
    <div>
        <FilterListIcon style={{color:'#fff',marginTop:'50%'}}/>
    </div>
    <div style={{padding:12,color:'#fff'}}><b>Filter</b></div>
    </div>
    </div>
  </div>)
}