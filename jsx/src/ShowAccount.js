import { useRef, useState } from "react";

function AccountList({ Account, onRemove, onToggle }) {
  return (
    <>
      <tr style={{ color: Account.active ? "green" : "black", fontWeight: Account.active ? "700" : "400" }}>
        <td>{Account.firstName}</td>
        <td>{Account.lastName}</td>
        <td>
          <span> ({Account.email})</span>
        </td>
        <td>
          <button onClick={() => onRemove(Account.id)}>delete</button>
        </td>
        <td>
          <button onClick={() => onToggle(Account.id)}>Toggle</button>
        </td>
      </tr>
    </>
  );
}

function ShowAccount({ Accounts, onRemove, onToggle }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Change color</th>
          </tr>
        </thead>
        <tbody>
          {Accounts.map((item) => (
            <AccountList Account={item} key={item.id} onRemove={onRemove} onToggle={onToggle} />
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
export default ShowAccount;
