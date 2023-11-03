import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserApplications } from '../../store/applications';
// Application Boards:
    // Applied
    // Interviewed
    // Rejected
    // Received Offer

    const initialTasks = [
        {
          id: 1,
          title: "Task 1",
        },
        {
          id: 2,
          title: "Task 2",
        },
        {
          id: 3,
          title: "Task 3",
        },
      ];

const Applications = () => {
    const dispatch = useDispatch()
    const allApplications = useSelector(state => state.applications.allApplications)
    const appsArr = Object.values(allApplications)
    console.log(appsArr)
    const appliedApps = appsArr.filter(app => app.status === "Applied")
    console.log(appliedApps)
    const interviewedApps = appsArr.filter(app => app.status === "Interviewed")
    const offeredApps = appsArr.filter(app => app.status === "Received Offer")
    const rejectedApps = appsArr.filter(app => app.status === "Rejected")
    const [applied, setApplied] = useState(appsArr)
    const [interviewed, setInterviewed] = useState(interviewedApps)
    const [rejected, setRejected] = useState(rejectedApps)
    const [receivedOffer, setReceivedOffer] = useState(offeredApps)

    useEffect(() => {
        dispatch(fetchUserApplications())
    }, [dispatch])

    const onDragEndApplied = (result) => {
        if (!result.destination) return;

        const [reorderedItem] = applied.splice(result.source.index, 1);
         applied.splice(result.destination.index, 0, reorderedItem);

         setApplied(reorderedItem);
    };
    return (
        <div>
            <section>
                <h1>Application</h1>
            </section>
            <section style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <h2>Applied</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
    <DragDropContext onDragEnd={onDragEndApplied}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {appliedApps.map((app, index) => (
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
                      <div>{app.company}</div>
                      <div>{app.job_title}</div>
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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <h2>Interviewed</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>

                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <h2>Received Offer</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>

                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <h2>Rejected</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Applications;
