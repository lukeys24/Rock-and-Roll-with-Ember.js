import { computed } from '@ember/object';
import Component from '@ember/component';

// components are invoked from templates by putting their names in curly braces
export default Component.extend({
    // Specifies outer HTML tag that wrap the component, we can remove since div is the default
    //tagName: 'div',
    // CSS classes on the outer element when rendering the component
    classNames: ['rating-panel'],

    rating: 0,
    maxRating: 5,
    onClick() {},

    stars: computed('rating', 'maxRating', function() {
        let stars = [];
        for (let i=1; i <= this.maxRating; i++) {
            stars.push({rating: i, isFull: this.rating >= i});
        }
        return stars;
    }),

    actions: {
        setRating(newRating) {
            return this.onClick(newRating);
        }
    }
});
