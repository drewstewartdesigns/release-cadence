{
    "weeks": [
      {
        "name": "Week 1",
        "id": 1,
        "days": [
          {
            "id": 1
          },
          {
            "id": 2
          },
          {
            "id": 3,
            "title": "Small Feature Cutoff",
            "description": "@ 11:59pm",
            "class": "sf-cutoff"
          },
          {
            "id": 4
          },
          {
            "id": 5
          }
        ]
      },
      {
        "name": "Week 2",
        "id": 2,
        "days": [
          {
            "id": 1,
            "title": "Bugfix Cutoff",
            "description": "@ 11:59pm",
            "class": "bf-cutoff"
          },
          {
            "id": 2
          },
          {
            "id": 3,
            "title": "Blocker Cutoff",
            "description": "@ 2pm",
            "class": "bl-cutoff"
          },
          {
            "id": 4,
            "title": "Large Feature Cutoff",
            "description": "@ 11:59pm",
            "class": "lf-cutoff"
          },
          {
            "id": 5,
            "details": "Release Day",
            "class": "release-day"
          }
        ]
      }
    ],
    "cadence": [
      {
        "name": "Cert Branch",
        "class": "cert-container",
        "id": 1,
        "branches": [
          {
            "name": "Develop",
            "id": 1,
            "class": "develop"
          },
          {
            "name": "Release",
            "id": 2,
            "class": "release"
          },
          {
            "name": "Develop",
            "id": 3,
            "class": "develop"
          }
        ],
        "actions": [
          {
            "class": "develop",
            "id": 1,
            "branch": [
              {
                "name": "Development",
                "class": "action",
                "id": 1
              }
            ]
          },
          {
            "class": "release",
            "id": 2,
            "branch": [
              {
                "name": "Go Live State Regression",
                "class": "action regression",
                "id": 1
              },
              {
                "name": "Release Defects",
                "class": "action defects",
                "id": 2
              },
              {
                "name": "Blockers Only",
                "class": "action blockers",
                "id": 3
              }
            ]
          },
          {
            "class": "develop",
            "id": 3,
            "branch": [
              {
                "name": "Development",
                "class": "action",
                "id": 1
              }
            ]
          }
        ]
      }
    ],
    "sprint": []
  }