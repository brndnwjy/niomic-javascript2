function panggilRegexp(value) {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  const regC = /[c]/ig
  const regK = /[k]/ig
  const regL = /[l]/ig
  console.log(str.match(regC))
  console.log(str.match(regK))
  console.log(str.match(regL))

}

panggilRegexp();
