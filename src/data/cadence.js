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
                class: 'release'
            },
            {
                name: 'Develop',
                id: 1,
                class: 'develop'
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