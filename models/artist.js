<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
	//Basic posting to database. More can be added at any time
	var Artist = sequelize.define(
		'artists',
		{
			artistName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			location: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			artistNumber: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			independent: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			shopName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			hourlyRate: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			artistMin: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			stylePref: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			artistInsta: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			shopLink: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			artistBio: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					len: [1]
				}
			},
			artistComments: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					len: [1]
				}
			}
		},
		{
			timestamps: false
		}
	);
	return Artist;
=======
  //Basic posting to database. More can be added at any time

  var Artist = sequelize.define(
    "artists",
    {
      artistName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      artistNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      independent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      shopName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hourlyRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      artistMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      stylePref: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      artistInsta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      shopLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      artistBio: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      artistComments: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Artist;
>>>>>>> 35cd082bbda3ba81c40f3b3160d59b6af0450ea5
=======
module.exports = function (sequelize, DataTypes) {
	//Basic posting to database. More can be added at any time

	var Artist = sequelize.define(
		"artists",
		{
			artistName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			location: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			artistNumber: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			independent: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			shopName: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			hourlyRate: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			artistMin: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			stylePref: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			artistInsta: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			shopLink: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			artistBio: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					len: [1],
				},
			},
			artistComments: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		},
		{
			timestamps: false,
		}
	);
	return Artist;
>>>>>>> 2df347bf85f8aa2730a202e4eea10137fa03cc79
};
