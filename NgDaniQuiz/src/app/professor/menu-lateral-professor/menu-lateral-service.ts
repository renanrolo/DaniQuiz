export class MenuLateralService {

    public classMenu: string = "toggled";

    toggleNavBar() {

        if (this.classMenu === "toggled") {
            this.classMenu = "";
        }
        else {
            this.classMenu = "toggled";
        }
    }
}