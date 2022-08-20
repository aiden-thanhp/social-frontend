import * as React from 'react';
import { 
    Paper,
    Divider,
    Typography,
    List,
    ListItem,
    ListItemText
} from '@mui/material';
import { getNews } from '../../utils/api';

const News = ({ top = 0 }) => {
    const [news, setNews] = React.useState();

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        getNews(signal).then((results) => {
            setNews(results)
        });
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
                                <ListItemText 
                                    primary={article.pillarName}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {article.webTitle}
                                            </Typography>
                                            {` - by ${article.sectionName}`}
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