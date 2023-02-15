package main

import (
	"fmt"
	"log"

	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"

	// "github.com/Rodrigo-Monteiro-Lima/delivery-simulator/infra/kafka"
	// kafka2 "github.com/Rodrigo-Monteiro-Lima/delivery-simulator/infra/kafka"
	"github.com/Rodrigo-Monteiro-Lima/delivery-simulator/infra/kafka"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading .env file")
	}
}

// Test consumer
func main() {
	msgChan := make(chan *ckafka.Message)
	consumer := kafka.NewKafkaConsumer(msgChan)
	go consumer.Consume()
	for msg := range msgChan {
		fmt.Println(string(msg.Value))
		// go kafka2.Produce(msg)
	}
}

//Test producer
// func main() {
// producer := kafka.NewKafkaProducer()
// kafka.Publish("olá Jaider", "readTest", producer)

// for {
// 	_ = 1
// }
// }

//Test route
// func main() {
// 	route := route2.Route{
// 		ID:       "1",
// 		ClientID: "1",
// 	}
// 	route.LoadPositions()
// 	stringjson, _ := route.ExportJsonPositions()
// 	fmt.Println(stringjson[1])
// }
