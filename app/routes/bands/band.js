import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        //console.log("Model hook for bands.band called with", params.id);
        // fetches model of a parent route that's already been activated, 
        // pass bands to access all bands previously been fetched by bands
        // let bands = this.modelFor('bands'); 


        // finds the first item whose property (passed as first argument) matches the value
        // passed as the second argument
        //return bands.findBy('slug', params.slug); 

        return this.store.findRecord('band', params.id);
    },

    actions : {
        // Executes on destination route when transition has completed
        didTransition() {
            document.title = 'Bands - Rock & Roll';
        },
    }
});
