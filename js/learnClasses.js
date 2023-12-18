"use strict";

class Note {
  _name = "";

  constructor(container, name = "", done = false) {
    this.item = document.createElement("div");
    this.buttonGroup = document.createElement("div");
    this.nameSpan = document.createElement("span");
    this.doneButton = document.createElement("button");
    this.deleteButton = document.createElement("button");
    this.item.innerText = "Example Div";

    this.item.classList.add("list__group--item", "div__flex--item");
    this.buttonGroup.classList.add("button__group--items");
    this.nameSpan.classList.add("btn", "name__btn");
    this.doneButton.classList.add("done__btn", "done");
    this.doneButton.innerHTML = "Done";
    this.deleteButton.classList.add("delete__btn", "delete");
    this.deleteButton.innerHTML = "Delete";

    this.buttonGroup.append(this.doneButton);
    this.buttonGroup.append(this.deleteButton);
    this.item.append(this.buttonGroup);
    this.item.append(this.nameSpan);

    this.doneButton.type = "submit";
    this.deleteButton.type = "button";

    // this.nameSpan.remove();

    this.doneButton.addEventListener("click", (e) => {
      if (e.target.classList.toggle("rename")) {
        this.nameSpan.innerHTML = "Chaban";
        this.nameSpan.style.cssText = `display: inline-block`;
      } else {
        this.nameSpan.innerHTML = this._name;
      }
      alert("Status: 'Done'");
    });

    this.deleteButton.addEventListener("click", (e) => {
      this.nameSpan.style.cssText = `display: none`;
      if (confirm("Do you want to delete this Text?")) {
        alert("Status: 'Delete'");
      } else {
        alert("It's a good idea :)");
      }
    });

    this.buttonGroup.style.cssText = `
      display: flex;
      gap: 30px;
      align-items: center;
    `;

    this.item.style.cssText = `
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 5px solid #f3f5f9;
      padding: 18px 32px;
      flex-direction: row-reverse;
    `;

    this.doneButton.style.cssText = `
      color: #fff;
      background: rgb(0,255,0);
      height: 30px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
    `;

    this.deleteButton.style.cssText = `
    color: #fff;
    background: rgb(255,0,0);
    height: 30px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    `;

    container.prepend(this.item);
  }

  set name(value) {
    this._name = value;
    this.nameSpan.innerHTML = this._name;
  }
  get name() {}
}

const newNote = new Note(document.getElementById("app"));
newNote.name = "Roman";
console.log(newNote);
