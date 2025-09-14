```mermaid
    graph TD
    subgraph User Layer
        User[<i class='fa fa-user'></i> Computer Science Student]
    end

    subgraph Presentation Layer
        UI[Client Application <br/>(Streamlit UI / React SPA)]
    end

    subgraph Application & Service Layer
        API_GW[API Gateway / Backend <br/>(FastAPI / Flask)]
        Auth[Authentication Service <br/>(OAuth2 / JWT)]
        Assess[Assessment Service]
        Personalization[Personalization Engine <br/>(AI/ML Services)]
    end

    subgraph Data Processing & Analytics Layer
        subgraph DataPipeline [Data & Analytics Pipeline]
            Kafka[Apache Kafka <br/>(Message Broker)]
            Spark[Apache Spark <br/>(Data Processing)]
        end
    end

    subgraph Data & Storage Layer
        DB[Application Database <br/>(PostgreSQL)]
        Cache[Cache & Session Store <br/>(Redis)]
        ContentStore[Content & Asset Storage <br/>(AWS S3)]
        CDN[Content Delivery Network <br/>(CloudFront)]
    end

    subgraph MLOps & Support Layer
        MLOps[MLOps & Explainability <br/>(MLflow, SHAP)]
        Monitor[Monitoring & Observability <br/>(Prometheus, Grafana, ELK)]
    end
    
    subgraph External Services
        External[External Content Sources]
    end

    %% --- Connections ---
    User -->|Interacts via HTTPS| UI
    UI -->|REST API Calls| API_GW
    
    API_GW -->|Authentication| Auth
    API_GW -->|User/Course Data| DB
    API_GW -->|Session Data| Cache
    API_GW -->|Serves Quiz Questions| Assess
    API_GW -->|Requests Content Generation| Personalization
    API_GW -->|Retrieves Content| ContentStore
    
    Assess -->|Quiz Submission Events| Kafka
    UI --> |Feedback Events| API_GW
    API_GW -->|Feedback Events| Kafka

    Kafka -->|Streams Data| Spark
    Spark -->|Processes Data & Extracts Features| DB
    Spark -->|Triggers Offline Model Training| Personalization
    
    Personalization -->|Reads Processed Data| DB
    Personalization -->|Uses External Info| External
    Personalization -->|Stores Generated Content| ContentStore
    Personalization -->|Logs Models & Experiments| MLOps
    
    ContentStore -->|Serves Assets via| CDN
    CDN -->|Delivers Static Assets| UI
    
    API_GW -->|Logs & Metrics| Monitor
    Personalization -->|Logs & Metrics| Monitor
    DataPipeline -->|Logs & Metrics| Monitor
    DB -->|Logs & Metrics| Monitor
end
```