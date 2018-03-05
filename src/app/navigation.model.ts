export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Search Types',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'multisearch',
                        'title': 'Multi-Search',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/multisearch',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
