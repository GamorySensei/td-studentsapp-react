class StudentProps {
    constructor(firstname, lastname, promo, note = 5) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.promo = promo;
        this.note = note;
    }
}

export default StudentProps;