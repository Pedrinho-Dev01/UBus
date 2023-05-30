import React from 'react';
import './account.css';
import steering_wheel from '../../assets/account_icons/steering_wheel.svg'
import wallet from '../../assets/account_icons/wallet.svg'
import gift from '../../assets/account_icons/gift.svg'
import letter from '../../assets/account_icons/letter.svg'
import discount from '../../assets/account_icons/discount.svg'
import settings from '../../assets/account_icons/settings.svg'

const Account = () => {
  return (
    <div>
      <h1 id='account-section' className='section-title'>Account</h1>
      <h2 id='account_id'></h2>
      <div class="table">
        <table class="center">
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