export class MenuLateralService {

    public classMenu: string = "toggled";

    toggleNavBar() {
console.log("chamou",this.classMenu)

        if (this.classMenu === "toggled") {
            this.classMenu = "";
        }
        else {
            this.classMenu = "toggled";
        }
    }
}