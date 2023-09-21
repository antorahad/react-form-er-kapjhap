import './App.css'
import Dada from './components/family-tree/Dada'
// import From from './components/From'
// import Hookform from './components/Hookform'
// import Refrom from './components/Refrom'
import Reuseableform from './components/Reuseableform'
// import StatefullFrom from './components/StatefullFrom'

function App() {
    // const handleLoginSubmit = data => {
    //   console.log('Login Data', data);
    // }

    // const handleRegistrationSubmit = data => {
    //   console.log('Registration Data', data);
    // }
  return (
    <>
    <h1>Form Er Genjam</h1>
    <Dada></Dada>
    {/* <From></From> */}
    {/* <StatefullFrom></StatefullFrom> */}
    {/* <Refrom></Refrom> */}
    {/* <Hookform></Hookform> */}
    {/* <Reuseableform 
      fromTitle={'Login'} 
      submitBtnText={'Login'} 
      handleSubmit={handleLoginSubmit}>
    </Reuseableform>


    <Reuseableform 
      fromTitle={'Registration'} 
      submitBtnText={'Registration'} 
      handleSubmit={handleRegistrationSubmit}>
    </Reuseableform> */}
    </>
  )
}

export default App
