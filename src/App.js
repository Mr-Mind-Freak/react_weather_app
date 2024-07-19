import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Data from './DataContext';
import { Modal, Button } from "react-bootstrap";

const App = () => {
  const { location, setLocation, temp, date, extractDate, weather, iconpath, wind, humidity, weatherData, handleInput,showModal, setShowModal } = useContext(Data);
  const [celcious, setCelcious] = useState(true);
  let non_active = 'm-0 w-50 py-3 text-center text-capitalize text-light rounded-pill';
  let active = 'm-0 w-50 py-3 text-center text-capitalize text-light rounded-pill measurement';
  const today = extractDate(date);

  const handleLocationChange = (e)=> {
    setLocation(e.target.value);
  }

  const handleClose = () => setShowModal(false);
   
  return (
    <div className='container pt-3'>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'> ERROR </Modal.Title>
        </Modal.Header>
        <Modal.Body> Please Enter the Correct City Name </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <section className='row d-flex justify-content-between'>
        <div className='col-2 col-md-1 p-0 d-flex justify-content-between align-items-center rounded-pill' style={{backgroundColor : 'rgb(255,255,255,0.16)'}}>
          <p  className={ celcious ? non_active : active} onClick={()=>{setCelcious(false)}}> f </p>
          <p className={ celcious ? active : non_active } onClick={()=>{setCelcious(true)}}> c </p>
        </div>
        <div className='col-10 col-md-4 d-flex align-items-center justify-content-evenly'>
          <img src={require('./assets/loc_icon.png')} alt='loc_icon' width={30} height={30} className='d-block'/>
          <input type='text' id='location' name='location' value={location} size={location.length+3} onChange={handleLocationChange} onKeyDown={handleInput} className='text-light h5 inputData' style={{backgroundColor : 'transparent', border:'none'}}/>
          <img src={require('./assets/search_icon.png')} alt='search_icon' width={40} height={40} className='d-block'/>
        </div>
      </section>
      <section className='row mt-md-2 mt-lg-5'>
        <div className='col-12 col-md-6 d-flex flex-wrap flex-md-nowrap align-items-center justify-content-evenly'>
          <div className=''>
            <img src={iconpath} alt='weather icon' width={200} height={200} className='d-block mx-auto'/>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light text-center mt-3'> {weather} </p>
            <div className='d-flex justify-content-between'>
              <div className='d-flex my-auto'>
                <img src={require('./assets/wind-direction-icon.png')} alt='icon' width={20} height={20} className='d-block me-1'/>
                <p className='text-light me-2'> {`Wind: ${wind}Km/h`} </p>
              </div>
              <div className='d-flex my-auto'>
                <img src={require('./assets/hum.png')} alt='icon' width={20} height={20} className='d-block me-1'/>
                <p className='text-light me-2'> {`Humidity: ${humidity}%`} </p>
              </div>
            </div>
            <p className='text-white text-capitalize border border-white rounded text-center' style={{fontSize:'2.2rem'}}> {location} </p>
          </div>
          <div className=''>
            <p style={{fontSize:'5rem', fontWeight : 200}} className='text-light'> { celcious ? temp : temp*(9/5)+32} <sup> {celcious?'C':'F'} </sup> </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {`${today.date}th ${today.month}, ${today.year}`} </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {today.day} </p>
          </div>
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-evenly align-items-center border border-white rounded' style={{backgroundColor: 'rgb(255,255,255,0.20)'}} >
          <div>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> Feels Like</p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> Temp Max </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> Temp Min </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> Pressure </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> Wind Deg </p>
          </div>
          <div>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {weatherData.main?.feels_like ? weatherData.main.feels_like : '30'} </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {weatherData.main?.temp_max ? weatherData.main.temp_max : '30'} </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {weatherData.main?.temp_min ? weatherData.main.temp_min : '30'} </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {weatherData.main?.pressure ? weatherData.main.feels_like : '30'} </p>
            <p style={{fontSize:'1.5rem', fontWeight : 200}} className='text-light'> {weatherData.wind?.deg ? weatherData.main.feels_like : '30'} </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
