import * as React from 'react';
import { 
    Paper,
    Divider,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@mui/material';
import { getNews } from '../../utils/api';

const News = ({ top = 0 }) => {
    const [news, setNews] = React.useState();

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        getNews(signal).then(({ articles }) => setNews(articles));
    }, [])

    if (news) {
        return (
            <Paper
                sx={{
                    boxShadow: 5,
                    display: { xs: "flex", md: "flex" },
                    mt: top
                }}
            >
                <List sx={{ width: '100%' }}>
                    <Typography
                        variant="h7"
                        noWrap
                        component="p"
                        href=""
                        sx={{
                            pt: 1,
                            pl: 2,
                            pb: 1,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        NEWS
                    </Typography>
                    <Divider />
                    {news.map((article, index) => {
                        return (
                            <ListItem 
                                key={index} 
                                alignItems="flex-start"
                                sx={{ width: '100%' }}
                            >
                                <ListItemAvatar>
                                    <Avatar 
                                        alt={article.author}
                                        src={article.urlToImage}
                                    />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={article.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {article.description}
                                            </Typography>
                                            {` - by ${article.author}`}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                    )})}
                </List>
            </Paper>
        )
    } else {
        return (
            <h5>Loading News Here</h5>
        )
    }
}

export default News;