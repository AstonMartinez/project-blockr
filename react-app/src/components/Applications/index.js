import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserApplications } from '../../store/applications';
import { fetchAllColumns, updateSingleColumn } from '../../store/appColumns';
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

const compileCards = (type, list) => {
    if(type === "Applied") {
        let appliedObjects = []
        list.forEach(app => {
            const appSplit = app.split(",")
            // console.log("APP SPLIT: ", appSplit)
            let indivApp = {}
            indivApp['id'] = Number(appSplit[0].split(": ")[1])
            indivApp['company'] = appSplit[2].split(": ")[1].replaceAll("'", "")
            indivApp['job_title'] = appSplit[3].split(": ")[1].replaceAll("'", "")
            indivApp['salary'] = Number(appSplit[4].split(": ")[1])
            indivApp['date_applied'] = `${appSplit[6]}/${appSplit[7]}`
            indivApp['location'] = appSplit[12].split(": ")[1].replaceAll("'", "")
            indivApp['status'] = "Applied"
            indivApp['notes'] = appSplit[15].split(": ")[1].replaceAll("'", "")
            // console.log(indivApp)
            appliedObjects.push(indivApp)
        })
        return appliedObjects
    } else if (type === "Interviewed") {
        let interviewedObjects = []
        list.forEach(app => {
            const appSplit = app.split(",")
            // console.log("APP SPLIT: ", appSplit)
            let indivApp = {}
            indivApp['id'] = Number(appSplit[0].split(": ")[1])
            indivApp['company'] = appSplit[2].split(": ")[1].replaceAll("'", "")
            indivApp['job_title'] = appSplit[3].split(": ")[1].replaceAll("'", "")
            indivApp['salary'] = Number(appSplit[4].split(": ")[1])
            indivApp['date_applied'] = `${appSplit[6]}/${appSplit[7]}`
            indivApp['location'] = appSplit[12].split(": ")[1].replaceAll("'", "")
            indivApp['status'] = "Interviewed"
            indivApp['notes'] = appSplit[15].split(": ")[1].replaceAll("'", "")
            // console.log(indivApp)
            interviewedObjects.push(indivApp)
        })
        return interviewedObjects
    } else if (type === "Rejected") {
        let rejectedObjects = []
        list.forEach(app => {
            const appSplit = app.split(",")
            // console.log("APP SPLIT: ", appSplit)
            let indivApp = {}
            indivApp['id'] = Number(appSplit[0].split(": ")[1])
            indivApp['company'] = appSplit[2].split(": ")[1].replaceAll("'", "")
            indivApp['job_title'] = appSplit[3].split(": ")[1].replaceAll("'", "")
            indivApp['salary'] = Number(appSplit[4].split(": ")[1])
            indivApp['date_applied'] = `${appSplit[6]}/${appSplit[7]}`
            indivApp['location'] = appSplit[12].split(": ")[1].replaceAll("'", "")
            indivApp['status'] = "Rejected"
            indivApp['notes'] = appSplit[15].split(": ")[1].replaceAll("'", "")
            // console.log(indivApp)
            rejectedObjects.push(indivApp)
        })
        return rejectedObjects
    } else if (type === "Received Offer") {
        let offeredObjects = []
        list.forEach(app => {
            const appSplit = app.split(",")
            // console.log("APP SPLIT: ", appSplit)
            let indivApp = {}
            indivApp['id'] = Number(appSplit[0].split(": ")[1])
            indivApp['company'] = appSplit[2].split(": ")[1]?.replaceAll("'", "")
            indivApp['job_title'] = appSplit[3].split(": ")[1]?.replaceAll("'", "")
            indivApp['salary'] = Number(appSplit[4].split(": ")[1])
            indivApp['date_applied'] = `${appSplit[6]}/${appSplit[7]}`
            indivApp['location'] = appSplit[12].split(": ")[1]?.replaceAll("'", "")
            indivApp['status'] = "Received Offer"
            indivApp['notes'] = appSplit[15].split(": ")[1]?.replaceAll("'", "")
            // console.log(indivApp)
            offeredObjects.push(indivApp)
        })
        return offeredObjects
    }
}

    const fetchAppData = (data) => {
        // const response = await fetch('/api/applications/all-cats')
        // if(response.ok) {
            // console.log("FETCHED COLUMN DATA: ", data['applied'].apps.split("},{")[0].split(",")[3].split(": "))
            const appliedDataArr = data['applied']?.apps?.split("},{")
            const interviewedDataArr = data['interviewed']?.apps?.split("},{")
            const rejectedDataArr = data['rejected']?.apps?.split("},{")
            const offeredDataArr = data['offered']?.apps?.split("},{")

            let result = {}
            result['applied'] = compileCards("Applied", appliedDataArr)
            result['interviewed'] = compileCards("Interviewed", interviewedDataArr)
            result['rejected'] = compileCards("Rejected", rejectedDataArr)
            result['offered'] = compileCards("Received Offer", offeredDataArr)
            return result
        // }
    }

const Applications = () => {
    const dispatch = useDispatch()
    const allApplications = useSelector(state => state.applications.allApplications)
    const allColumns = useSelector(state => state.columns.allColumns)
    console.log(allColumns)
    const appsArr = Object.values(allApplications)

    // const appliedApps = appsArr.filter(app => app.status === "Applied")
    // const interviewedApps = appsArr.filter(app => app.status === "Interviewed")
    // const offeredApps = appsArr.filter(app => app.status === "Received Offer")
    // const rejectedApps = appsArr.filter(app => app.status === "Rejected")

    const [toggle, setToggle] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const [applied, setApplied] = useState(allColumns ? allColumns.applied : [])
    const [interviewed, setInterviewed] = useState(allColumns ? allColumns.interviewed : [])
    const [rejected, setRejected] = useState(allColumns ? allColumns.rejected : [])
    const [receivedOffer, setReceivedOffer] = useState(allColumns ? allColumns.offered : [])


    // fetchAppData()

    useEffect(() => {
        dispatch(fetchAllColumns())
        .then(() => {
            setTimeout(() => {
                // if(!allColumns) {
                    // setLoaded(false)
                // } else {
                    setApplied(allColumns.applied)
                    setInterviewed(allColumns.interviewed)
                    setReceivedOffer(allColumns.offered)
                    setRejected(allColumns.rejected)
                    setLoaded(true)
                // }
            }, 3000)
        }).then(() => {
            if(applied !== allColumns.applied) {
                setApplied(allColumns.applied)
            }

            if(interviewed !== allColumns.interviewed) {
                setInterviewed(allColumns.interviewed)
            }

            if(rejected !== allColumns.rejected) {
                setRejected(allColumns.rejected)
            }

            if(receivedOffer !== allColumns.offered) {
                setReceivedOffer(allColumns.offered)
            }
        })
    }, [dispatch])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setApplied(appliedApps)
    //         setInterviewed(interviewedApps)
    //         setReceivedOffer(offeredApps)
    //         setRejected(rejectedApps)
    //     }, 3000)
    // }, [])

    // useEffect(() => {
    //     fetchAppData()
    // }, [])



    const onDragEndApplied = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = allColumns.applied.splice(result.source.index, 1);
         allColumns.applied.splice(result.destination.index, 0, reorderedItem);

        setApplied(applied);
        const updatedList = []
        for(let i = 0; i < allColumns.applied.length; i++) {
            let curr = allColumns.applied[i]
            updatedList.push(curr.id.toString())
        }
        dispatch(updateSingleColumn("Applied", { 'apps_list': updatedList.toString() }))
        // dispatch(fetchAllColumns())
    };

    const onDragEndInterviewed = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = allColumns.interviewed.splice(result.source.index, 1);
        allColumns.interviewed.splice(result.destination.index, 0, reorderedItem);

        setInterviewed(interviewed);
        const updatedList = []
        for(let i = 0; i < allColumns.interviewed.length; i++) {
            let curr = allColumns.interviewed[i]
            updatedList.push(curr.id.toString())
        }
        dispatch(updateSingleColumn("Interviewed", { 'apps_list': updatedList.toString() }))
    };

    const onDragEndOffered = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = allColumns.offered.splice(result.source.index, 1);
        allColumns.offered.splice(result.destination.index, 0, reorderedItem);

        setReceivedOffer(receivedOffer);
        const updatedList = []
        for(let i = 0; i < allColumns.offered.length; i++) {
            let curr = allColumns.offered[i]
            updatedList.push(curr.id.toString())
        }
        dispatch(updateSingleColumn("Received Offer", { 'apps_list': updatedList.toString() }))
    };

    const onDragEndRejected = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = allColumns.rejected.splice(result.source.index, 1);
        allColumns.rejected.splice(result.destination.index, 0, reorderedItem);

        setRejected(rejected);
        const updatedList = []
        for(let i = 0; i < allColumns.rejected.length; i++) {
            let curr = allColumns.rejected[i]
            updatedList.push(curr.id.toString())
        }
        dispatch(updateSingleColumn("Rejected", { 'apps_list': updatedList.toString() }))
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
                                {/* {loaded && applied.length > 0 ? ( */}

                                    <DragDropContext onDragEnd={onDragEndApplied}>
                                        <Droppable droppableId="tasks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {allColumns.applied?.map((app, index) => (
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
                                                        <SingleApp appData={app} colData={allColumns.applied} />
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
                            <Divider id='app-board-divider' orientation='vertical' flexItem />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <h2>Interviewed</h2>
                            </div>
                            <div className='individual-app-board' style={{display: 'flex', flexDirection: 'column'}}>
                                {/* {loaded && interviewed.length > 0 ( */}
                                    <DragDropContext onDragEnd={onDragEndInterviewed}>
                                        <Droppable droppableId="tasks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {allColumns.interviewed?.map((app, index) => (
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
                                {/* )} */}
                            </div>
                        </div>
                            <Divider id='app-board-divider' orientation='vertical' flexItem />
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <h2>Received Offer</h2>
                            </div>
                            <div className='individual-app-board' style={{display: 'flex', flexDirection: 'column'}}>
                                {/* {loaded && receivedOffer.length > 0 ( */}
                                    <DragDropContext onDragEnd={onDragEndOffered}>
                                        <Droppable droppableId="tasks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                            {allColumns.offered?.map((app, index) => (
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
                                {/* )} */}
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
                                        {allColumns.rejected?.map((app, index) => (
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
