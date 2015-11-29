package io.gof.peyek.repository;

import io.gof.peyek.domain.Document;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Document entity.
 */
public interface DocumentRepository extends JpaRepository<Document,Long> {

}
