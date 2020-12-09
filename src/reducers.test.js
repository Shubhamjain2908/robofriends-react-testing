import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';
import * as reducers from './reducers';


describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should return the itntial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    });

    // it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    //     expect(reducers.searchRobots(initialStateSearch, {
    //         type: REQUEST_ROBOTS_SUCCESS,
    //         payload: 'abc'
    //     })).toEqual({ searchField: 'abc' })
    // });

    // it('should handle REQUEST_ROBOTS_FAILED', () => {
    //     expect(reducers.searchRobots(initialStateSearch, {
    //         type: REQUEST_ROBOTS_FAILED,
    //         payload: 'abc'
    //     })).toEqual({ searchField: 'abc' })
    // });
})


describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }

    it('should return the itntial state', () => {
        expect(reducers.requestRobots(initialStateRobots, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: 'abc'
        })).toEqual({ robots: [],
            isPending: true 
        })
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@hskj.com'
            }]
        })).toEqual({ robots: [{
            id: '123',
            name: 'test',
            email: 'test@hskj.com'
        }],
            isPending: false 
        })
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOOOOO!!!!'
        })).toEqual({ 
            error: 'NOOOOOOOO!!!!',
            isPending: false,
            robots: []
        })
    });
});