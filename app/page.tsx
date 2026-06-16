"use client";
export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'black',padding:32,color:'white',textAlign:'center',fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:48,color:'#a855f7',fontWeight:'bold'}}>Damn Support 🚀</h1>
      <p style={{color:'gray',marginTop:16}}>منصة دعم المؤثرين بتوكن SAM</p>
      
      <div style={{marginTop:40}}>
        <div style={{background:'#111',padding:24,borderRadius:16,margin:16,border:'1px solid #9333ea'}}>
          <p style={{color:'gray'}}>سعر SAM</p>
          <p style={{fontSize:32,fontWeight:'bold'}}>$0.10</p>
        </div>
        
        <div style={{background:'#111',padding:24,borderRadius:16,margin:16,border:'1px solid #9333ea'}}>
          <p style={{color:'gray'}}>محروق لليوم</p>
          <p style={{fontSize:32,fontWeight:'bold'}}>1,234,567 SAM</p>
        </div>
      </div>

      <div style={{marginTop:48}}>
        <button 
          onClick={() => alert("قريباً: ربط MetaMask + عقد الدفع")}
          style={{background:'#9333ea',padding:'16px 48px',borderRadius:12,fontSize:20,fontWeight:'bold',border:'none',color:'white'}}
        >
          ادعم عبسي بـ 10$
        </button>
      </div>
    </div>
  )
}
