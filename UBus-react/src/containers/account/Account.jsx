import React from 'react';
import './account.css';
import './person.png';
import steering_wheel from '../../assets/account_icons/steering_wheel.svg'
import wallet from '../../assets/account_icons/wallet.svg'
import gift from '../../assets/account_icons/gift.svg'
import letter from '../../assets/account_icons/letter.svg'
import discount from '../../assets/account_icons/discount.svg'
import settings from '../../assets/account_icons/settings.svg'

const avatar = require('./person.png')

const Account = () => {
  return (
    <div>
      <h1>Welcome to your Account</h1>
      <table>
        <tr className="row">
          <td>
            <img src={avatar} alt='avatar' style={{width: "50px"}}/>
          </td>
          <td colspan="2">
            <b>Profile</b>
          </td>
          <td></td>
        </tr>
        <tr className="row">
          <td>
            <img src={letter} alt='letter' style={{width: "50px"}}/>
          </td>
          <td colspan="2">
            <b>Messages</b>
          </td>
          <td></td>
        </tr>
        <tr className="row">
          <td>
            <img src={gift} alt='gift' style={{width: "50px"}}/>
          </td>
          <td colspan="2">
            <b>Send a gift</b>
          </td>
          <td></td>
        </tr>
        <tr className="row">
          <td>
            <img src={wallet} alt='wallet' style={{width: "50px"}}/>
          </td>
          <td colspan="2">
            <b>Wallet</b>
          </td>
          <td></td>
        </tr>
        <tr className="row">
          <td>
            <img src={discount} alt='discount' style={{width: "50px"}}/>
          </td>
          <td colspan="2">
            <b>Promotions</b>
          </td>
          <td></td>
        </tr>
        <tr className="row">
          <td>
            <img src={settings} alt='settings' style={{width: "50px"}}/>
          </td>
          <td colspan="2">
            <b>Settings</b>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default Account;