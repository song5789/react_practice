function InputAccount({ firstName, lastName, email, password, onCreate, onChange, onModify }) {
  return (
    <div style={{ width: 250 }}>
      <div>
        <span>
          <b>Create & Dropbox Account</b>
        </span>
      </div>
      <div>
        <input name="firstName" value={firstName || ""} placeholder="First name..." onChange={onChange} />
        <input name="lastName" value={lastName} placeholder="Last name..." onChange={onChange} />
        <input type="email" name="email" value={email} placeholder="email..." onChange={onChange} />
        <input type="password" name="password" value={password} placeholder="password..." onChange={onChange} />
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
          <input type="checkbox" name="check" />
          <label>Remember me </label>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
          <button onClick={onCreate}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default InputAccount;
