"use strict";
/*

// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

 */
window.userData = getDataLocalStorage();
const form = document.forms[0];
const inputCPF = document.getElementById("cpf");
const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
form.addEventListener("keyup", updateUserData);
window.addEventListener("load", setDataLocalStorage);
function updateUserData({ target }) {
    if (!(target instanceof HTMLInputElement))
        return;
    const id = target?.id;
    window.userData[id] = target?.value;
    if (!checkTypeGuard(window.userData))
        return;
    localStorage.setItem("userData", JSON.stringify(window.userData));
}
function checkTypeGuard(data) {
    if (!data || typeof data !== "object")
        return false;
    if ("nome" in data || "cpf" in data || "email" in data)
        return true;
    else
        return false;
}
function getDataLocalStorage() {
    if (!localStorage.userData)
        return;
    if (!(typeof localStorage.getItem("userData") === "string"))
        return;
    const userData = localStorage.getItem("userData");
    if (!userData)
        return;
    const userDataJSON = JSON.parse(userData);
    if (checkTypeGuard(userDataJSON))
        return userDataJSON;
}
function checkInputElement(data) {
    if (data && data instanceof HTMLInputElement)
        return true;
    else
        return false;
}
function setDataLocalStorage() {
    const userData = getDataLocalStorage();
    if (!(userData && checkTypeGuard(userData)))
        return;
    Object.entries(userData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (checkInputElement(input)) {
            console.log(input, value);
            input.value = value;
        }
    });
}
/* SOLUÇÃO ANDRE RAFAEL

interface Window {
  UserData: any;
}

window.UserData = {};

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData');
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

loadLocalStorage();

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', handleInput);

*/
