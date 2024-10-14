import { ITheatherMovieMapper, TheatherMovieController } from './TheatherMovieController'
import { BookingController } from './BookingController'
import { Movie } from './Movie';
import { ECity, EMovie, SeatCategoryEnum } from './Enum';
import { Theather } from './Theather';
import { Address } from './Address';
import { Screeen } from './Screen';
import { Seat } from './Seat';
import { Show } from './Show';
import { Booking } from './Booking';
class Main {
    theatherMovieController: TheatherMovieController;
    bookingController: BookingController;

    constructor() {
        this.theatherMovieController = new TheatherMovieController();
        this.bookingController = new BookingController();
    }

    runFlow() {
        const movies: Movie[] = this.createMovie();
        this.createTheatherAndMapMovie(movies);
        this.bookingProcess();
    }

    createMovie(): Movie[] {
        const movie1 = new Movie();
        movie1.id = '1';
        movie1.description = '';
        movie1.name = EMovie.OPPENHEIMER

        const movie2 = new Movie();
        movie2.id = '2';
        movie2.description = '';
        movie2.name = EMovie.DEADPOOL

        return [movie1, movie2]
    }

    createTheatherAndMapMovie(movies: Movie[]) {
        const addressNoida = new Address();
        addressNoida.city = ECity.NOIDA;
        addressNoida.id = 'noida';

        const pvr = new Theather();
        pvr.id = 'pvr';
        pvr.name = 'pvr noida';
        pvr.address = addressNoida;

        const inox = new Theather();
        inox.id = 'inox';
        inox.name = 'inox noida';
        inox.address = addressNoida;


        //create screen
        const screen1 = new Screeen();
        screen1.id = 'screen1';
        screen1.name = 'audi-1';
        screen1.setSeats(this.createSeats());

        const screen2 = new Screeen();
        screen2.id = 'screen2';
        screen2.name = 'audi-2';
        screen2.setSeats(this.createSeats());

        //create show
        const show1 = new Show();
        show1.id = 'show1';
        show1.name = 'fist-show';
        show1.screen = screen1;
        show1.timing = '10 AM';


        const show2 = new Show();
        show2.id = 'show2';
        show2.name = 'second-show';
        show2.screen = screen2;
        show2.timing = '02 PM';


        const mapper = this.theatherMovieController;

        const mapping1: ITheatherMovieMapper = {
            movie: movies[0],
            address: addressNoida,
            theather: pvr,
            price: 500,
            showList: [show1, show2],
        }

        const mapping2: ITheatherMovieMapper = {
            movie: movies[1],
            address: addressNoida,
            theather: pvr,
            price: 700,
            showList: [show1],
        }

        const mapping3: ITheatherMovieMapper = {
            movie: movies[1],
            address: addressNoida,
            theather: inox,
            price: 1000,
            showList: [show1, show2],
        }

        mapper.addMapping(mapping1);
        mapper.addMapping(mapping2);
        mapper.addMapping(mapping3);

    }

    createSeats(): Seat[] {
        const seatList: Seat[] = [];
        for (let i = 1; i < 11; i++) {
            const platinumSeat = new Seat()
            platinumSeat.id = `${i}`;
            platinumSeat.seatCategory = SeatCategoryEnum.PLATINUM;

            seatList.push(platinumSeat)
        }

        for (let i = 11; i < 21; i++) {
            const goldSeat = new Seat()
            goldSeat.id = `${i}`;
            goldSeat.seatCategory = SeatCategoryEnum.GOLD;

            seatList.push(goldSeat)
        }

        return seatList;
    }

    bookingProcess() {
        //list all movies in a city
        const movies = this.theatherMovieController.getMoviesByCity(ECity.NOIDA);

        const fevMovie = movies[0];
        console.log('selecting movie', fevMovie);

        //check all theather where this movie is available
        const theathers = this.theatherMovieController.getTheathersByMovieName(fevMovie.name)
        console.log('selecting theather', theathers[0]);

        //get schedule for a theather for selected movie
        const shows = this.theatherMovieController.getMovieScheduleFromTheather(theathers[0].id, fevMovie.id)
        console.log('movie Schedule', shows);

        const availTimings: string[] = [];
        for (const obj of shows) {
            availTimings.push(obj.timing);
        }

        console.log('availble timing of show', availTimings);

        const convinentTime = availTimings[0];

        //pick seat no
        const bookedSeats: string[] = shows[0].getBookedSeat();
        const totalSeats: string[] = shows[0].screen.seatList.map(seat => seat.id);

        const availableSeats: string[] = totalSeats.filter(seat => !bookedSeats.includes(seat));
        console.log('available seats', availableSeats.toString());
        //let's book the seats

        const seatNo = availableSeats[0];
        const show = shows[0]
        const theatherId = theathers[0].id
        this.bookingController.makeBooking(seatNo, show, theatherId);

        this.bookingController.makeBooking(availableSeats[1], show, theatherId);

        this.bookingController.makeBooking(seatNo, show, theatherId);

    }

}

new Main().runFlow();