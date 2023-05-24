import React from 'react';
import './account.css';
import steering_wheel from '../../assets/steering_wheel.svg'
import wallet from '../../assets/wallet.svg'
import gift from '../../assets/gift.svg'
import letter from '../../assets/letter.svg'
import discount from '../../assets/discount.svg'
import settings from '../../assets/settings.svg'

const Account = () => {
  return (
    <div>
      <h1 id='account-section' className='section-title'>Account</h1>
      <h2 id='account_id'></h2>
      <div class="table">
        <table border={1} class="center">
          <tr>
          <td>
          <img src={steering_wheel} alt='steering' style={{width: "50px"}}/>
          </td>
          <td>
            <b>Driver Mode</b>
          </td>
          <td>
            <label class="switch">
              <input type="checkbox" checked></input>
              <span class="slider round"></span>
            </label>
          </td>
          </tr>
          <tr>
            <td>
              <img src={wallet} alt='wallet' style={{width: "50px"}}/>
            </td>
            <td>
              <b>Balance</b>
            </td>
            <td>
              <b>€0,00</b>
            </td>
          </tr>
          <tr>
            <td>
              <img src={letter} alt='letter' style={{width: "50px"}}/>
            </td>
            <td colspan="2">
              <b>Messages</b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img src={gift} alt='gift' style={{width: "50px"}}/>
            </td>
            <td colspan="2">
              <b>Send a gift</b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img src={discount} alt='discount' style={{width: "50px"}}/>
            </td>
            <td colspan="2">
              <b>Promotions</b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img src={settings} alt='settings' style={{width: "50px"}}/>
            </td>
            <td colspan="2">
              <b>Settings</b>
            </td>
          </tr>
        </table>
      </div>
    </div>

    
    

  )
}

export default Account