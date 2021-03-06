import GhostSelect from 'ghost/components/gh-select';

var RolesSelector = GhostSelect.extend({
    roles: Ember.computed.alias('options'),
    options: Ember.computed(function () {
        var rolesPromise = this.store.find('role', { permissions: 'assign' });

        //汉化修改后台角色呈现名称
        this.store.find('role', { permissions: 'assign' }).then(function(item){
            item.forEach( function( i ){ 
                var n = i.get('description');
                i.set('name', n);
            });
        });
        var rolesPromise =  this.store.find('role', { permissions: 'assign' });
        

        return Ember.ArrayProxy.extend(Ember.PromiseProxyMixin)
            .create({promise: rolesPromise});
    })
});

export default RolesSelector;
