export const CadenceData = [
    {
        name: 'Cert Branch',
        class: 'cert-container',
        branches: [
            {
                name: 'Develop',
                id: 1,
                class: 'develop'
            },
            {
                name: 'Release',
                id: 2,
                class: 'release'
            },
            {
                name: 'Develop',
                id: 3,
                class: 'develop'
            },
            {
                name: 'Release',
                id: 4,
                class: 'release',
                actions: [
                    {
                        name: 'Go Live State Regression',
                        class: 'action'
                    },
                    {
                        name: 'All Defects',
                        class: 'action'
                    },
                    {
                        name: 'Blockers Only',
                        class: 'action'
                    }
                ]
            },
            {
                name: 'Develop',
                id: 1,
                class: 'develop',
                actions: [
                    {
                        name: 'Development',
                        class: 'action'
                    }
                ]
            }
        ],
        actions: [
            {
                class: 'develop',
                branch: [
                    {
                        name: 'Development',
                        class: 'action'
                    }
                ]
            },
            {
                class: 'release',
                branch: [
                    {
                        name: 'Go Live State Regression',
                        class: 'action',
                        id: 1
                    },
                    {
                        name: 'All Defects',
                        class: 'action',
                        id: 2
                    },
                    {
                        name: 'Blockers Only',
                        class: 'action',
                        id: 3
                    }
                ]
            },
            {
                class: 'develop',
                branch: [
                    {
                        name: 'Development',
                        class: 'action'
                    }
                ]
            },
            {
                class: 'release',
                branch: [
                    {
                        name: 'Go Live State Regression',
                        class: 'action',
                        id: 1
                    },
                    {
                        name: 'All Defects',
                        class: 'action',
                        id: 2
                    },
                    {
                        name: 'Blockers Only',
                        class: 'action',
                        id: 3
                    }
                ]
            },
            {
                class: 'develop',
                branch: [
                    {
                        name: 'Development',
                        class: 'action'
                    }
                ]
            }
        ]
    }
];