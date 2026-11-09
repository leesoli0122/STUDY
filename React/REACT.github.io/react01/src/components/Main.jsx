const Main = () => {
    const number = 10;
    const obj = { a:1};
    const user = {
        name:"이정환",
        isLogin:true,
    }
    // return (
    //     // <main>
    //     //     <h1>main</h1>
    //     //     <h2>{number % 2 === 0 ? "짝수":"홀수"}</h2>
    //     //     {15}
    //     //     {[1,2,3,5]}
    //     //     {true}
    //     //     {undefined}
    //     //     {null}
    //     //     <div>{obj.a}</div>
    //     // </main>
    //     <>
    //         {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
    //     </>
    // )
    if(user.isLogin){
        return <div style={{backgroundColor:"red", borderBottom:"5px solid blue"}}>로그아웃</div>
    }else {
        return <div>로그인</div>
    }
}

export default Main;