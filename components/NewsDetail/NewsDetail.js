import styles from "./NewsDetail.module.css"
import Jobs from "../Jobs";
import JobsItem from "../JobsItem";

export default function NewsDetail({ item }) {
    return (
        <div>
            <div>
                <div>

                </div>
                <img src={item.image} alt={item.title}/>
                <div>{item.type}</div>
            </div>
            <div>
                <div>{item.title}</div>
                <div>{item.date}</div>
                <div>{item.place}</div>
                <div>
                    {!!item.labels.length && (
                        <div>
                            {item.labels.map(label => (
                                <div>{label}</div>
                            ))}
                        </div>
                    )}
                </div>
                <div>Организатор</div>
                <div>{item.organizer}</div>
                <div>Описание</div>
                <div dangerouslySetInnerHTML={{ __html: item.text }}/>
            </div>

            <div>Роли на мероприятии</div>
            <div>
                <Jobs>
                    {item.jobs.map(item => (
                        <JobsItem key={item.id} item={item} />
                    ))}
                </Jobs>
            </div>
        </div>
    )
}