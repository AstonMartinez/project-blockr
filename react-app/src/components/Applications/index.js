import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserApplications } from '../../store/applications';
import SingleApp from './SingleApp';
import LoadingScreen from '../LoadingScreen';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import NavDrawer from "../NavDrawer";
import './Applications.css'
// Application Boards:
    // Applied
    // Interviewed
    // Rejected
    // Received Offer

const Applications = () => {
    const dispatch = useDispatch()
    const allApplications = useSelector(state => state.applications.allApplications)
    const appsArr = Object.values(allApplications)

    const appliedApps = appsArr.filter(app => app.status === "Applied")
    const interviewedApps = appsArr.filter(app => app.status === "Interviewed")
    const offeredApps = appsArr.filter(app => app.status === "Received Offer")
    const rejectedApps = appsArr.filter(app => app.status === "Rejected")

    const [toggle, setToggle] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const [applied, setApplied] = useState(appliedApps)
    const [interviewed, setInterviewed] = useState(interviewedApps)
    const [rejected, setRejected] = useState(rejectedApps)
    const [receivedOffer, setReceivedOffer] = useState(offeredApps)

    useEffect(() => {
        dispatch(fetchUserApplications())
        .then(() => {
            setTimeout(() => {
                setLoaded(true)
            }, 3000)
        })
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            setApplied(appliedApps)
            setInterviewed(interviewedApps)
            setReceivedOffer(offeredApps)
            setRejected(rejectedApps)
        }, 3000)
    }, [])



    const onDragEndApplied = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = applied.splice(result.source.index, 1);
         applied.splice(result.destination.index, 0, reorderedItem);

        setApplied(applied);
    };

    const onDragEndInterviewed = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = interviewed.splice(result.source.index, 1);
         interviewed.splice(result.destination.index, 0, reorderedItem);

         setInterviewed(interviewed);
    };

    const onDragEndOffered = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = receivedOffer.splice(result.source.index, 1);
         receivedOffer.splice(result.destination.index, 0, reorderedItem);

         setReceivedOffer(receivedOffer);
    };

    const onDragEndRejected = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = rejected.splice(result.source.index, 1);
         rejected.splice(result.destination.index, 0, reorderedItem);

         setRejected(rejected);
    };
    return (
        <Box sx={{ display: 'flex' }}>
        <NavDrawer page={'Applications'} />
            <Box component="main"
            sx={{
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            }}>
                <div>
                    {!loaded && (
                        <LoadingScreen />
                    )}
                    <section style={{textAlign: 'center'}}>
                        <h1>Application</h1>
                    </section>
                    <section id='apps-boards-holder'>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <h2>Applied</h2>
                            </div>
                            <div className='individual-app-board' style={{display: 'flex', flexDirection: 'column'}}>
                                {/* {loaded && ( */}
                                {loaded && applied.length > 0 ? (

                                    <DragDropContext onDragEnd={onDragEndApplied}>
                                        <Droppable droppableId="tasks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {applied.map((app, index) => (
                                                <Draggable
                                                key={app.id}
                                                draggableId={app.id.toString()}
                                                index={index}
                                                >
                                                {(provided) => (
                                                    <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    >
                                                        <SingleApp appData={app} />
                                                    </div>
                                                )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                            </div>
                                        )}
                                        </Droppable>
                                    </DragDropContext>
                                ) : (
                                    ''
                                    // <DragDropContext onDragEnd={onDragEndApplied}>
                                    //     <Droppable droppableId="tasks">
                                    //     {(provided) => (
                                    //         <div ref={provided.innerRef} {...provided.droppableProps}>
                                    //         {appliedApps.map((app, index) => (
                                    //             <Draggable
                                    //             key={app.id}
                                    //             draggableId={app.id.toString()}
                                    //             index={index}
                                    //             >
                                    //             {(provided) => (
                                    //                 <div
                                    //                 {...provided.draggableProps}
                                    //                 {...provided.dragHandleProps}
                                    //                 ref={provided.innerRef}
                                    //                 >
                                    //                     <SingleApp appData={app} />
                                    //                 </div>
                                    //             )}
                                    //             </Draggable>
                                    //         ))}
                                    //         {provided.placeholder}
                                    //         </div>
                                    //     )}
                                    //     </Droppable>
                                    // </DragDropContext>
                                )}
                                {/* )} */}
                            </div>
                        </div>
                            <Divider id='app-board-divider' orientation='vertical' flexItem />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <h2>Interviewed</h2>
                            </div>
                            <div className='individual-app-board' style={{display: 'flex', flexDirection: 'column'}}>
                                {loaded && (
                                    <DragDropContext onDragEnd={onDragEndInterviewed}>
                                        <Droppable droppableId="tasks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {interviewed.map((app, index) => (
                                                <Draggable
                                                key={app.id}
                                                draggableId={app.id.toString()}
                                                index={index}
                                                >
                                                {(provided) => (
                                                    <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    >
                                                        <SingleApp appData={app} />
                                                    </div>
                                                )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                            </div>
                                        )}
                                        </Droppable>
                                    </DragDropContext>
                                )}
                            </div>
                        </div>
                            <Divider id='app-board-divider' orientation='vertical' flexItem />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <h2>Received Offer</h2>
                            </div>
                            <div className='individual-app-board' style={{display: 'flex', flexDirection: 'column'}}>
                                {loaded && (
                                    <DragDropContext onDragEnd={onDragEndOffered}>
                                        <Droppable droppableId="tasks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {receivedOffer.map((app, index) => (
                                                <Draggable
                                                key={app.id}
                                                draggableId={app.id.toString()}
                                                index={index}
                                                >
                                                {(provided) => (
                                                    <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    >
                                                        <SingleApp appData={app} />
                                                    </div>
                                                )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                            </div>
                                        )}
                                        </Droppable>
                                    </DragDropContext>
                                )}
                            </div>
                        </div>
                            <Divider id='app-board-divider' orientation='vertical' flexItem />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <h2>Rejected</h2>
                            </div>
                            <div className='individual-app-board' style={{display: 'flex', flexDirection: 'column'}}>
                                <DragDropContext onDragEnd={onDragEndRejected}>
                                    <Droppable droppableId="tasks">
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {rejected.map((app, index) => (
                                            <Draggable
                                            key={app.id}
                                            draggableId={app.id.toString()}
                                            index={index}
                                            >
                                            {(provided) => (
                                                <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                >
                                                    <SingleApp appData={app} />
                                                </div>
                                            )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                        </div>
                                    )}
                                    </Droppable>
                                </DragDropContext>
                            </div>
                        </div>
                    </section>
                </div>
            </Box>
        </Box>
    )
}

export default Applications;
