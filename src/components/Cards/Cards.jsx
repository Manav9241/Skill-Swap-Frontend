import React from 'react';
import './cards.css'; // Import CSS file for styling
import Card from '../Card/Card';

// const users = [
//     {
//         id: 1,
//         name: 'John Doe',
//         description: 'Frontend Developer',
//         image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAZlBMVEX29vZCQkL8/Pw1NTXm5ub////5+fk/Pz9FRUUxMTE7OzstLS04ODjz8/NeXl7w8PCwsLB5eXlVVVXHx8fY2Njg4ODAwMClpaWBgYGLi4u4uLhwcHAgICCbm5tjY2PPz88WFhZNTU2+2wZ+AAAEB0lEQVR4nO2aC2+jMAyAQx5OQniUAqUtpYz//ycvga13u65wXQWedP7UTZOqbd8c7CT2GCMIgiAIgiAIgiAIgiAIgsAGwocC4JwDtssjQDFZ9WXZV5Kp0fJHqQLjSjbHbDBRZIbs2NRKMZb+KEfWF8ImWkc6inScuKTo4ecIehNenaz1ch7z/rLiVPmHElJIsQVZeAgPWRLEPqGT7KCw1SZ8Du+cju4wkXY7+CEp0wgfs8jcaerINv5t/IVW5/iLGE6B1PEZea3DInIpHhmGQDrJcR195cuL+C5T/iBuc+ynkZ9nYjg+j2dkRZBtMhPDKYy4iqqMZwU9SYkbRnUU84La2KNCLTtqLp3fJQVqTkP9Nv8kesxbjemoDpclRW0uqFu1atyCovGKTVDEyhnV2aVl1sZ1CjGn1WlJ0UtaXMVuaaE9Pop4hkztFtMlMpcdqmK/WHSMeSsxFSG/jKX7sad/54J71lH+0jIfxCjJUIOYToVxbrGNa5AP3vU+XjiM7WtcQ5Z28+dFIzpkQwbV8NBudB8q7IsB47vLo0TxL3M5Y1+vQiuifbgJmsi1iqF3TFIus69P3j6GIpPpT+jhgSwe3A5EK4MfpiLcHN3YtfuU20a7YrrnY0cRUgDIu0vykSMfq5xcupQHP+xHcezEAihZmFjrjzyO4mQopEqB4wsGeJ6Dj1ffXY2wwmOtuXY944ynOeZp9gOlzoUPWGgkyn53aq9tcdr10scvhLY4KMQdOkgBsMP1kgjRScb9M6neCV9z2QiRuKxES5dxzAJ14YS/QWkXNX3OIagFcc7zvotcyPLEFVj3aJ/JDA770I3wjpEWQ9uUde4zJJVV2bTm1qcQ+zNHqjyQHkWQM6FFF9rv1sXDPsv2Q+xsfBsd+HdskWIEEnjdWn2rgtNnrWOP1r/L96iobbvtYvtjgV81VWfLd+gbNqu2zGy/naSMV0YsX6H/2K5Nte1ap7y+LtyrPuH/GHHdcK3DQC2/LrQ+PxvqsGdft+soh4NDa59Z5SmQtt1sUO3r4dk9KTjizrDV1JJX+8Um/FfofbVVBc/bp5J5IpRIsdWAg/tlfl5x/Ba3zX0Q+HA/fP7XSA4c1v5vBP8L+O5buTI5ut0GYQR5/fsi9QRxK9dPGDjcz8af4bC+Ynp6Zl/5C6Pj0/p1UX6vJr6j9b5eN4zA1OH7yTLi1p5lpap44pT4RRSNLdTKtwSlX1lnT6xXVoR8eXQ6j3nLx+vtaoq8fF2xVKsq/su4alZwGmatqhiGfub7RONgdV3Fpf+FWA6jOK5bdfjxxYSOouS46kkCWDu2514gce3KR++8li+zqmA40L7M2kfadX88QRAEQRAEQRAEQRAEQRAEQRAEQRD/Ab8AKysy9tp91AUAAAAASUVORK5CYII=',
//         skillsToTeach: [
//             { name: 'React', duration: '3 months' },
//             { name: 'JavaScript', duration: '6 months' }
//         ],
//         skillsToLearn: [
//             { name: 'Node.js', duration: '1 year' },
//             { name: 'GraphQL', duration: '6 months' }
//         ]
//     },
//     {
//         id: 2,
//         name: 'John Doe',
//         description: 'Frontend Developer',
//         image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAZlBMVEX29vZCQkL8/Pw1NTXm5ub////5+fk/Pz9FRUUxMTE7OzstLS04ODjz8/NeXl7w8PCwsLB5eXlVVVXHx8fY2Njg4ODAwMClpaWBgYGLi4u4uLhwcHAgICCbm5tjY2PPz88WFhZNTU2+2wZ+AAAEB0lEQVR4nO2aC2+jMAyAQx5OQniUAqUtpYz//ycvga13u65wXQWedP7UTZOqbd8c7CT2GCMIgiAIgiAIgiAIgiAIgsAGwocC4JwDtssjQDFZ9WXZV5Kp0fJHqQLjSjbHbDBRZIbs2NRKMZb+KEfWF8ImWkc6inScuKTo4ecIehNenaz1ch7z/rLiVPmHElJIsQVZeAgPWRLEPqGT7KCw1SZ8Du+cju4wkXY7+CEp0wgfs8jcaerINv5t/IVW5/iLGE6B1PEZea3DInIpHhmGQDrJcR195cuL+C5T/iBuc+ynkZ9nYjg+j2dkRZBtMhPDKYy4iqqMZwU9SYkbRnUU84La2KNCLTtqLp3fJQVqTkP9Nv8kesxbjemoDpclRW0uqFu1atyCovGKTVDEyhnV2aVl1sZ1CjGn1WlJ0UtaXMVuaaE9Pop4hkztFtMlMpcdqmK/WHSMeSsxFSG/jKX7sad/54J71lH+0jIfxCjJUIOYToVxbrGNa5AP3vU+XjiM7WtcQ5Z28+dFIzpkQwbV8NBudB8q7IsB47vLo0TxL3M5Y1+vQiuifbgJmsi1iqF3TFIus69P3j6GIpPpT+jhgSwe3A5EK4MfpiLcHN3YtfuU20a7YrrnY0cRUgDIu0vykSMfq5xcupQHP+xHcezEAihZmFjrjzyO4mQopEqB4wsGeJ6Dj1ffXY2wwmOtuXY944ynOeZp9gOlzoUPWGgkyn53aq9tcdr10scvhLY4KMQdOkgBsMP1kgjRScb9M6neCV9z2QiRuKxES5dxzAJ14YS/QWkXNX3OIagFcc7zvotcyPLEFVj3aJ/JDA770I3wjpEWQ9uUde4zJJVV2bTm1qcQ+zNHqjyQHkWQM6FFF9rv1sXDPsv2Q+xsfBsd+HdskWIEEnjdWn2rgtNnrWOP1r/L96iobbvtYvtjgV81VWfLd+gbNqu2zGy/naSMV0YsX6H/2K5Nte1ap7y+LtyrPuH/GHHdcK3DQC2/LrQ+PxvqsGdft+soh4NDa59Z5SmQtt1sUO3r4dk9KTjizrDV1JJX+8Um/FfofbVVBc/bp5J5IpRIsdWAg/tlfl5x/Ba3zX0Q+HA/fP7XSA4c1v5vBP8L+O5buTI5ut0GYQR5/fsi9QRxK9dPGDjcz8af4bC+Ynp6Zl/5C6Pj0/p1UX6vJr6j9b5eN4zA1OH7yTLi1p5lpap44pT4RRSNLdTKtwSlX1lnT6xXVoR8eXQ6j3nLx+vtaoq8fF2xVKsq/su4alZwGmatqhiGfub7RONgdV3Fpf+FWA6jOK5bdfjxxYSOouS46kkCWDu2514gce3KR++8li+zqmA40L7M2kfadX88QRAEQRAEQRAEQRAEQRAEQRAEQRD/Ab8AKysy9tp91AUAAAAASUVORK5CYII=',
//         skillsToTeach: [
//             { name: 'React', duration: '3 months' },
//             { name: 'JavaScript', duration: '6 months' }
//         ],
//         skillsToLearn: [
//             { name: 'Node.js', duration: '1 year' },
//             { name: 'GraphQL', duration: '6 months' }
//         ]
//     },
//     {
//         id: 5,
//         name: 'John Doe',
//         description: 'Frontend Developer',
//         image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAZlBMVEX29vZCQkL8/Pw1NTXm5ub////5+fk/Pz9FRUUxMTE7OzstLS04ODjz8/NeXl7w8PCwsLB5eXlVVVXHx8fY2Njg4ODAwMClpaWBgYGLi4u4uLhwcHAgICCbm5tjY2PPz88WFhZNTU2+2wZ+AAAEB0lEQVR4nO2aC2+jMAyAQx5OQniUAqUtpYz//ycvga13u65wXQWedP7UTZOqbd8c7CT2GCMIgiAIgiAIgiAIgiAIgsAGwocC4JwDtssjQDFZ9WXZV5Kp0fJHqQLjSjbHbDBRZIbs2NRKMZb+KEfWF8ImWkc6inScuKTo4ecIehNenaz1ch7z/rLiVPmHElJIsQVZeAgPWRLEPqGT7KCw1SZ8Du+cju4wkXY7+CEp0wgfs8jcaerINv5t/IVW5/iLGE6B1PEZea3DInIpHhmGQDrJcR195cuL+C5T/iBuc+ynkZ9nYjg+j2dkRZBtMhPDKYy4iqqMZwU9SYkbRnUU84La2KNCLTtqLp3fJQVqTkP9Nv8kesxbjemoDpclRW0uqFu1atyCovGKTVDEyhnV2aVl1sZ1CjGn1WlJ0UtaXMVuaaE9Pop4hkztFtMlMpcdqmK/WHSMeSsxFSG/jKX7sad/54J71lH+0jIfxCjJUIOYToVxbrGNa5AP3vU+XjiM7WtcQ5Z28+dFIzpkQwbV8NBudB8q7IsB47vLo0TxL3M5Y1+vQiuifbgJmsi1iqF3TFIus69P3j6GIpPpT+jhgSwe3A5EK4MfpiLcHN3YtfuU20a7YrrnY0cRUgDIu0vykSMfq5xcupQHP+xHcezEAihZmFjrjzyO4mQopEqB4wsGeJ6Dj1ffXY2wwmOtuXY944ynOeZp9gOlzoUPWGgkyn53aq9tcdr10scvhLY4KMQdOkgBsMP1kgjRScb9M6neCV9z2QiRuKxES5dxzAJ14YS/QWkXNX3OIagFcc7zvotcyPLEFVj3aJ/JDA770I3wjpEWQ9uUde4zJJVV2bTm1qcQ+zNHqjyQHkWQM6FFF9rv1sXDPsv2Q+xsfBsd+HdskWIEEnjdWn2rgtNnrWOP1r/L96iobbvtYvtjgV81VWfLd+gbNqu2zGy/naSMV0YsX6H/2K5Nte1ap7y+LtyrPuH/GHHdcK3DQC2/LrQ+PxvqsGdft+soh4NDa59Z5SmQtt1sUO3r4dk9KTjizrDV1JJX+8Um/FfofbVVBc/bp5J5IpRIsdWAg/tlfl5x/Ba3zX0Q+HA/fP7XSA4c1v5vBP8L+O5buTI5ut0GYQR5/fsi9QRxK9dPGDjcz8af4bC+Ynp6Zl/5C6Pj0/p1UX6vJr6j9b5eN4zA1OH7yTLi1p5lpap44pT4RRSNLdTKtwSlX1lnT6xXVoR8eXQ6j3nLx+vtaoq8fF2xVKsq/su4alZwGmatqhiGfub7RONgdV3Fpf+FWA6jOK5bdfjxxYSOouS46kkCWDu2514gce3KR++8li+zqmA40L7M2kfadX88QRAEQRAEQRAEQRAEQRAEQRAEQRD/Ab8AKysy9tp91AUAAAAASUVORK5CYII=',
//         skillsToTeach: [
//             { name: 'React', duration: '3 months' },
//             { name: 'JavaScript', duration: '6 months' }
//         ],
//         skillsToLearn: [
//             { name: 'Node.js', duration: '1 year' },
//             { name: 'GraphQL', duration: '6 months' }
//         ]
//     },
//     {
//         id: 3,
//         name: 'John Doe',
//         description: 'Frontend Developer',
//         image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAZlBMVEX29vZCQkL8/Pw1NTXm5ub////5+fk/Pz9FRUUxMTE7OzstLS04ODjz8/NeXl7w8PCwsLB5eXlVVVXHx8fY2Njg4ODAwMClpaWBgYGLi4u4uLhwcHAgICCbm5tjY2PPz88WFhZNTU2+2wZ+AAAEB0lEQVR4nO2aC2+jMAyAQx5OQniUAqUtpYz//ycvga13u65wXQWedP7UTZOqbd8c7CT2GCMIgiAIgiAIgiAIgiAIgsAGwocC4JwDtssjQDFZ9WXZV5Kp0fJHqQLjSjbHbDBRZIbs2NRKMZb+KEfWF8ImWkc6inScuKTo4ecIehNenaz1ch7z/rLiVPmHElJIsQVZeAgPWRLEPqGT7KCw1SZ8Du+cju4wkXY7+CEp0wgfs8jcaerINv5t/IVW5/iLGE6B1PEZea3DInIpHhmGQDrJcR195cuL+C5T/iBuc+ynkZ9nYjg+j2dkRZBtMhPDKYy4iqqMZwU9SYkbRnUU84La2KNCLTtqLp3fJQVqTkP9Nv8kesxbjemoDpclRW0uqFu1atyCovGKTVDEyhnV2aVl1sZ1CjGn1WlJ0UtaXMVuaaE9Pop4hkztFtMlMpcdqmK/WHSMeSsxFSG/jKX7sad/54J71lH+0jIfxCjJUIOYToVxbrGNa5AP3vU+XjiM7WtcQ5Z28+dFIzpkQwbV8NBudB8q7IsB47vLo0TxL3M5Y1+vQiuifbgJmsi1iqF3TFIus69P3j6GIpPpT+jhgSwe3A5EK4MfpiLcHN3YtfuU20a7YrrnY0cRUgDIu0vykSMfq5xcupQHP+xHcezEAihZmFjrjzyO4mQopEqB4wsGeJ6Dj1ffXY2wwmOtuXY944ynOeZp9gOlzoUPWGgkyn53aq9tcdr10scvhLY4KMQdOkgBsMP1kgjRScb9M6neCV9z2QiRuKxES5dxzAJ14YS/QWkXNX3OIagFcc7zvotcyPLEFVj3aJ/JDA770I3wjpEWQ9uUde4zJJVV2bTm1qcQ+zNHqjyQHkWQM6FFF9rv1sXDPsv2Q+xsfBsd+HdskWIEEnjdWn2rgtNnrWOP1r/L96iobbvtYvtjgV81VWfLd+gbNqu2zGy/naSMV0YsX6H/2K5Nte1ap7y+LtyrPuH/GHHdcK3DQC2/LrQ+PxvqsGdft+soh4NDa59Z5SmQtt1sUO3r4dk9KTjizrDV1JJX+8Um/FfofbVVBc/bp5J5IpRIsdWAg/tlfl5x/Ba3zX0Q+HA/fP7XSA4c1v5vBP8L+O5buTI5ut0GYQR5/fsi9QRxK9dPGDjcz8af4bC+Ynp6Zl/5C6Pj0/p1UX6vJr6j9b5eN4zA1OH7yTLi1p5lpap44pT4RRSNLdTKtwSlX1lnT6xXVoR8eXQ6j3nLx+vtaoq8fF2xVKsq/su4alZwGmatqhiGfub7RONgdV3Fpf+FWA6jOK5bdfjxxYSOouS46kkCWDu2514gce3KR++8li+zqmA40L7M2kfadX88QRAEQRAEQRAEQRAEQRAEQRAEQRD/Ab8AKysy9tp91AUAAAAASUVORK5CYII=',
//         skillsToTeach: [
//             { name: 'React', duration: '3 months' },
//             { name: 'JavaScript', duration: '6 months' }
//         ],
//         skillsToLearn: [
//             { name: 'Node.js', duration: '1 year' },
//             { name: 'GraphQL', duration: '6 months' }
//         ]
//     },
//     {
//         id: 4,
//         name: 'John Doe',
//         description: 'Frontend Developer',
//         image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAZlBMVEX29vZCQkL8/Pw1NTXm5ub////5+fk/Pz9FRUUxMTE7OzstLS04ODjz8/NeXl7w8PCwsLB5eXlVVVXHx8fY2Njg4ODAwMClpaWBgYGLi4u4uLhwcHAgICCbm5tjY2PPz88WFhZNTU2+2wZ+AAAEB0lEQVR4nO2aC2+jMAyAQx5OQniUAqUtpYz//ycvga13u65wXQWedP7UTZOqbd8c7CT2GCMIgiAIgiAIgiAIgiAIgsAGwocC4JwDtssjQDFZ9WXZV5Kp0fJHqQLjSjbHbDBRZIbs2NRKMZb+KEfWF8ImWkc6inScuKTo4ecIehNenaz1ch7z/rLiVPmHElJIsQVZeAgPWRLEPqGT7KCw1SZ8Du+cju4wkXY7+CEp0wgfs8jcaerINv5t/IVW5/iLGE6B1PEZea3DInIpHhmGQDrJcR195cuL+C5T/iBuc+ynkZ9nYjg+j2dkRZBtMhPDKYy4iqqMZwU9SYkbRnUU84La2KNCLTtqLp3fJQVqTkP9Nv8kesxbjemoDpclRW0uqFu1atyCovGKTVDEyhnV2aVl1sZ1CjGn1WlJ0UtaXMVuaaE9Pop4hkztFtMlMpcdqmK/WHSMeSsxFSG/jKX7sad/54J71lH+0jIfxCjJUIOYToVxbrGNa5AP3vU+XjiM7WtcQ5Z28+dFIzpkQwbV8NBudB8q7IsB47vLo0TxL3M5Y1+vQiuifbgJmsi1iqF3TFIus69P3j6GIpPpT+jhgSwe3A5EK4MfpiLcHN3YtfuU20a7YrrnY0cRUgDIu0vykSMfq5xcupQHP+xHcezEAihZmFjrjzyO4mQopEqB4wsGeJ6Dj1ffXY2wwmOtuXY944ynOeZp9gOlzoUPWGgkyn53aq9tcdr10scvhLY4KMQdOkgBsMP1kgjRScb9M6neCV9z2QiRuKxES5dxzAJ14YS/QWkXNX3OIagFcc7zvotcyPLEFVj3aJ/JDA770I3wjpEWQ9uUde4zJJVV2bTm1qcQ+zNHqjyQHkWQM6FFF9rv1sXDPsv2Q+xsfBsd+HdskWIEEnjdWn2rgtNnrWOP1r/L96iobbvtYvtjgV81VWfLd+gbNqu2zGy/naSMV0YsX6H/2K5Nte1ap7y+LtyrPuH/GHHdcK3DQC2/LrQ+PxvqsGdft+soh4NDa59Z5SmQtt1sUO3r4dk9KTjizrDV1JJX+8Um/FfofbVVBc/bp5J5IpRIsdWAg/tlfl5x/Ba3zX0Q+HA/fP7XSA4c1v5vBP8L+O5buTI5ut0GYQR5/fsi9QRxK9dPGDjcz8af4bC+Ynp6Zl/5C6Pj0/p1UX6vJr6j9b5eN4zA1OH7yTLi1p5lpap44pT4RRSNLdTKtwSlX1lnT6xXVoR8eXQ6j3nLx+vtaoq8fF2xVKsq/su4alZwGmatqhiGfub7RONgdV3Fpf+FWA6jOK5bdfjxxYSOouS46kkCWDu2514gce3KR++8li+zqmA40L7M2kfadX88QRAEQRAEQRAEQRAEQRAEQRAEQRD/Ab8AKysy9tp91AUAAAAASUVORK5CYII=',
//         skillsToTeach: [
//             { name: 'React', duration: '3 months' },
//             { name: 'JavaScript', duration: '6 months' }
//         ],
//         skillsToLearn: [
//             { name: 'Node.js', duration: '1 year' },
//             { name: 'GraphQL', duration: '6 months' }
//         ]
//     },
//     // Add more user objects as needed
// ];

const Cards = (props) => {
    return (
        <div className="parent-container">
            {props.users.map((user) => {
                return (<Card key={user.id} user={user} />)
            }
              )}
        </div>
    );
}

export default Cards;
