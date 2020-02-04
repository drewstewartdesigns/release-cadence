export const CadenceData = [
    {
        name: 'Cert Branch',
        class: 'cert-container',
        id: 1,
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
                class: 'release'
            },
            {
                name: 'Develop',
                id: 5,
                class: 'develop'
            }
        ],
        actions: [
            {
                class: 'develop',
                id: 1,
                branch: [
                    {
                        name: 'Development',
                        class: 'action',
                        id: 1
                    }
                ]
            },
            {
                class: 'release',
                id: 2,
                branch: [
                    {
                        name: 'Go Live State Regression',
                        class: 'action regression',
                        id: 1
                    },
                    {
                        name: 'All Defects',
                        class: 'action defects',
                        id: 2
                    },
                    {
                        name: 'Blockers Only',
                        class: 'action blockers',
                        id: 3
                    }
                ]
            },
            {
                class: 'develop',
                id: 3,
                branch: [
                    {
                        name: 'Development',
                        class: 'action',
                        id: 1
                    }
                ]
            },
            {
                class: 'release',
                id: 4,
                branch: [
                    {
                        name: 'Go Live State Regression',
                        class: 'action regression',
                        id: 1
                    },
                    {
                        name: 'All Defects',
                        class: 'action defects',
                        id: 2
                    },
                    {
                        name: 'Blockers Only',
                        class: 'action blockers',
                        id: 3
                    }
                ]
            },
            {
                class: 'develop',
                id: 5,
                branch: [
                    {
                        name: 'Development',
                        class: 'action',
                        id: 1
                    }
                ]
            }
        ]
    }
];