const sqlite3 = require('sqlite3').verbose();
import express, {Express, Request, Response} from 'express';

async function main() {
    const db = new sqlite3.Database('data/instagram_influencers.sqlite3');
    const app: Express = express();
    const port = 3000;

    // http://localhost:3000/top-influencer
    app.get('/top-influencer', (req: Request, res: Response) => {
        db.serialize(() => {
            db.get(`Select \`Influencer insta name\` as username,
                           cast(
                                   replace(replace(replace(Followers, '.', ''), 'M', '0000'), 'K', '000' as INTEGER) as no_followers
                                   from influencers
                                   order by no_followers desc 
                                   LIMIT 1;`, (err: Error, row: any) => {
                res.send({
                    "username": row["username"],
                    "followers": row["no_followers"]
                });
            });
        });
    });

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
}

main().then();