import { supabase } from "@/services/supabase";

// 🔹 Fonction pour uploader un fichier PDF
export const uploadPdf = async (file) => {
  if (!file) return { error: "Aucun fichier sélectionné" };

  const filePath = `mes_projets/${file.name}`; // Chemin dans le bucket

  const { data, error } = await supabase.storage
    .from("mes_projets") // Nom du bucket
    .upload(filePath, file, { upsert: true }); // upsert = remplace si existe déjà

  if (error) {
    console.error("Erreur d'upload :", error);
    return { error };
  }

  return { data };
};

// 🔹 Fonction pour récupérer la liste des fichiers PDF
export const getProjectPdfs = async () => {
  const { data, error } = await supabase.storage
    .from("mes_projets")
    .list("mes_projets"); // Liste des fichiers dans ce dossier

  if (error) {
    console.error("Erreur de récupération des fichiers :", error);
    return [];
  }

  return data.map(file => ({
    name: file.name,
    url: supabase.storage.from("mes_projets").getPublicUrl(`mes_projets/${file.name}`).data.publicUrl
  }));
};

// 🔹 Fonction pour supprimer un fichier PDF
export const deletePdf = async (fileName) => {
  const { error } = await supabase.storage
    .from("mes_projets")
    .remove([`mes_projets/${fileName}`]); // Supprime le fichier du bucket

  if (error) {
    console.error("Erreur de suppression :", error);
    return { error };
  }

  return { success: true };
};
