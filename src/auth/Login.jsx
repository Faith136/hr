import Form from './Form'


export default function Login({
    setAuthState,
    setUser 

}) {
    
    return (
<div className=" px-10 py-15 rounded-3xl border-2">
<div className=" items-center justify-center">
    <Form setAuthState={setAuthState} setUser={setUser} />
    
</div>
</div>
    );
}