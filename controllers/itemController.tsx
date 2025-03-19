import React, { useState } from "react";
import { ItemService } from "@/service/itemService";
import { Item } from "@/models/item";
// import { ItemView } from "@/views/ItemView"
// import { ItemModal } from "@/components/ItemModal"
// import { ConfirmRemoveModal } from "@/components/ConfirmRemoveModal"

export function ItemController() {
    const [items, setItems] = useState<Item[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
}
