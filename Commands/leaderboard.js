         const statsBoard = await Schema.find({}).limit(10).sort({
                fieldName: -1
            })

            const ranks = statsBoard.sort((a, b) => {
                if (a.fieldName > b.fieldName) return -1;
                else if (a.fieldName < b.fieldName) return 1;
                else return 0;
            });

            let leaderboard = ''
            for (let counter = 0; counter < NetWorthBoard.length; ++counter) {
                const {
                    userNameNoTag,
                    fieldName = 0
                } = statsBoard[counter]

                leaderboard += `**${counter + 1}. ${userNameNoTag}** with **${fieldName.toLocaleString()}**\n`
            }
